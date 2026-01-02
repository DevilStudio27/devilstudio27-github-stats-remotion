import React from "react";
import {AbsoluteFill, useCurrentFrame, interpolate, spring} from "remotion";

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
  [key: string]: any;
}

interface Props {
  stats: Stats | null;
}

const iconMap: Record<string, string> = {
  stars: "⭐",
  forks: "🍴",
  commits: "📝",
  pullRequests: "🔀",
  openedIssues: "⬆️",
  closedIssues: "⬇️",
  repoViews: "📡",
  linesChanged: "➕",
  contributions: "🤝",
};

export const GitHubRemotionStats: React.FC<Props> = ({ stats }) => {
  const frame = useCurrentFrame();
  const fade = spring({ fps: 30, frame, from: 0, to: 1, durationInFrames: 40 });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#161b22",
        borderRadius: 30,
        padding: 30,
        fontFamily: "'JetBrains Mono', monospace",
        color: "#c9d1d9",
        fontSize: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        opacity: fade,
        overflow: "hidden",
      }}
    >
      {/* Left stats list */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{display: "flex", alignItems: "center", gap: 15, marginBottom: 20}}>
          <img
            src="https://github.com/DevilStudio27.png"
            alt="avatar"
            style={{ width: 70, height: 70, borderRadius: "50%" }}
          />
          <span style={{fontSize: 40}}>Hi, I'm DevilStudio27</span>
        </div>

        {[
          ["stars", "Stars"],
          ["forks", "Forks"],
          ["commits", "Commits"],
          ["pullRequests", "Pull Requests"],
          ["openedIssues", "Opened Issues"],
          ["closedIssues", "Closed Issues"],
          ["repoViews", "Repo Views (2 wks)"],
          ["linesChanged", "Lines of code changed"],
          ["contributions", "Total contributions"],
        ].map(([key, label]) => (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontVariantNumeric: "tabular-nums",
              width: "100%",
            }}
          >
            <span>
              <span style={{ marginRight: 8 }}>{iconMap[key as keyof typeof iconMap]}</span>
              {label}:
            </span>
            <span>{stats?.[key as keyof Stats]?.toLocaleString() ?? 0}</span>
          </div>
        ))}
      </div>

      {/* Right vertical light streak */}
      <div
        style={{
          width: 40,
          marginLeft: 20,
          borderRadius: 20,
          background:
            "linear-gradient(180deg, rgba(54,93,172,0.7) 0%, rgba(54,93,172,0.3) 30%, rgba(255,194,158,0.8) 60%, rgba(255,194,158,0.3) 100%)",
          filter: "blur(10px)",
          animation: "twist 5s linear infinite",
        }}
      />

      {/* Add keyframes inside a style tag or global CSS */}
      <style>
        {`
          @keyframes twist {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-100%) rotate(360deg); }
          }
        `}
      </style>
    </AbsoluteFill>
  );
};
