import React from 'react';
import {AbsoluteFill, Img, useCurrentFrame, interpolate, spring} from 'remotion';

interface Stats {
  totalCommits?: number;
  totalPRs?: number;
  totalIssues?: number;
  totalRepos?: number;
  followers?: number;
  [key: string]: any;
}

interface Props {
  stats: Stats | null;
}

export const GitHubRemotionStats: React.FC<Props> = ({ stats }) => {
  const frame = useCurrentFrame();

  // Smooth fade-in animation
  const fade = spring({
    fps: 30,
    frame,
    from: 0,
    to: 1,
    durationInFrames: 30,
  });

  // Optional: small pop-in scale effect
  const scale = interpolate(frame, [0, 15], [0.8, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0d1117', // GitHub dark background
        color: '#c9d1d9', // text color
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        fontSize: 40,
        transform: `scale(${scale})`,
        opacity: fade,
      }}
    >
      <h1 style={{margin: 0, fontSize: 60}}>GitHub Stats</h1>

      <div style={{display: 'flex', gap: 50, marginTop: 40}}>
        <StatCard label="Commits" value={stats?.totalCommits ?? 0} />
        <StatCard label="PRs" value={stats?.totalPRs ?? 0} />
        <StatCard label="Issues" value={stats?.totalIssues ?? 0} />
        <StatCard label="Repos" value={stats?.totalRepos ?? 0} />
        <StatCard label="Followers" value={stats?.followers ?? 0} />
      </div>
    </AbsoluteFill>
  );
};

interface StatCardProps {
  label: string;
  value: number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  const frame = useCurrentFrame();

  // Slide-in animation for each card
  const translateX = interpolate(frame, [0, 30], [100, 0], { extrapolateRight: 'clamp' });
  const fade = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#161b22',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        transform: `translateX(${translateX}px)`,
        opacity: fade,
        minWidth: 120,
      }}
    >
      <span style={{fontSize: 50, fontWeight: 'bold'}}>{value}</span>
      <span style={{fontSize: 20, color: '#8b949e', marginTop: 5}}>{label}</span>
    </div>
  );
};
