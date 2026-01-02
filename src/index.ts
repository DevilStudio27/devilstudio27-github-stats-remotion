import { Composition } from "remotion";
import { GitHubRemotionStats } from "./GitHubRemotionStats";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="GitHubRemotionStats"
        component={GitHubRemotionStats}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={400}
        defaultProps={{
          stats: null,
        }}
      />
    </>
  );
};