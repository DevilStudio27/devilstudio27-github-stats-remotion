import {CalculateMetadataFunction, Composition, getInputProps} from 'remotion';
import './style.css';

import {getUserStats} from './functions/setup';
import {Config, MainProps, mainSchema} from './config';
import {defaultStats} from './defaultStats';
import { GitHubRemotionStats } from './GitHubRemotionStats';
import {Card} from './components/Effects/Card';
import {cards} from './components/Cards';

const {FPS, DurationInFrames} = Config;

export const RemotionRoot = () => {
	const calculateMetadata: CalculateMetadataFunction<MainProps> = async (
		props
	) => {
		const {usernames} = getInputProps();
		const userStats = await getUserStats(usernames as string[]);

		return {
			props: {
				...props,
				userStats,
			},
		};
	};

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
