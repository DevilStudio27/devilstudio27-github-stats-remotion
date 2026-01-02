import React from "react";
import {AbsoluteFill, useCurrentFrame, interpolate, spring} from "remotion";

// Paste Octicons SVG components or import them if you have them in your project
// Here I include the Star icon inline as an example, you should replace with other icons similarly.

const StarIcon = () => (
  <svg
    height="20"
    width="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

// Similarly, define ForkIcon, CommitIcon, PullRequestIcon, IssueOpenIcon, IssueClosedIcon, RepoViewIcon, LinesChangedIcon, ContributionsIcon
// Dummy icon components (replace with real SVGs)

const ForkIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 9v6a3 3 0 003 3h6" />
  </svg>
);

const CommitIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v3m0 12v3" />
  </svg>
);

const PullRequestIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 012 2v7" />
    <path d="M10 17l4-4-4-4" />
  </svg>
);

const IssueOpenIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
  </svg>
);

const IssueClosedIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const RepoViewIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const LinesChangedIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M4 4h16M4 12h16M4 20h16" />
  </svg>
);

const ContributionsIcon = () => (
  <svg height="20" width="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 6v6a2 2 0 01-2 2h-6" />
    <path d="M8 18H4v-4" />
    <circle cx="18" cy="18" r="3" />
  </svg>
);

interface Stats {
  stars?: number;
  forks?: number;
  commits?: number;
  pullRequests?: number;
  openedIssues?: number;
  closedIssues?: number;
  repoViews?: number;
  linesChanged?: number;
  contributions?: number;
}

interface Props {
  stats: Stats | null;
}

const iconMap: Record<string, React.ReactNode> = {
  stars: <StarIcon />,
  forks: <ForkIcon />,
  commits: <CommitIcon />,
  pullRequests: <PullRequestIcon />,
  openedIssues: <IssueOpenIcon />,
  closedIssues: <IssueClosedIcon />,
  repoViews: <RepoViewIcon />,
  linesChanged: <LinesChangedIcon />,
  contributions: <ContributionsIcon />,
};

export const GitHubRemotionStats: React.FC<Props> = ({ stats }) => {
  const frame = useCurrentFrame();
  const fade = spring({ fps: 30, frame, from: 0, to: 1, durationInFrames: 45 });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
        borderRadius: 20,
        padding: 30,
        fontFamily: "'JetBrains Mono', monospace",
        color: "#c9d1d9",
        fontSize: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        opacity: fade,
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(90, 98, 110, 0.5)",
      }}
    >
      {/* Left side: Avatar and Stats */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 25 }}>
          <img
            src="https://github.com/DevilStudio27.png"
            alt="Avatar"
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
          <span style={{ fontSize: 28 }}>Hi, I'm Sahil Thakur</span>
        </div>

        {/* Stats List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {(Object.keys(iconMap) as (keyof Stats)[]).map((key) => (
            <div
              key={key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontVariantNumeric: "tabular-nums",
                alignItems: "center",
                color: "#c9d1d9",
                userSelect: "none",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#58a6ff" }}>{iconMap[key]}</span>
                <span style={{ minWidth: 160, fontWeight: 400 }}>
                  {labelMap[key]}:
                </span>
              </span>
              <span>{(stats?.[key] ?? 0).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Vertical light streak */}
      <div
        style={{
          width: 50,
          marginLeft: 15,
          borderRadius: 40,
          filter: "blur(10px)",
          background:
            "linear-gradient(180deg, rgba(90, 122, 224, 0.8) 0%, rgba(255, 195, 158, 0.8) 100%)",
          animation: "twist 6s linear infinite",
        }}
      />

      {/* CSS keyframes for vertical streak */}
      <style>
        {`
          @keyframes twist {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            100% {
              transform: translateY(-100%) rotate(360deg);
            }
          }
        `}
      </style>
    </AbsoluteFill>
  );
};

const labelMap: Record<keyof Stats, string> = {
  stars: "Stars",
  forks: "Forks",
  commits: "Commits",
  pullRequests: "Pull Requests",
  openedIssues: "Opened Issues",
  closedIssues: "Closed Issues",
  repoViews: "Repo Views (2 wks)",
  linesChanged: "Lines of code changed",
  contributions: "Total contributions",
};
