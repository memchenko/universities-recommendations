import { globify } from '@utils/promisified';
import { fromRoot } from '@utils/paths';

export default async function(): Promise<void> {
    const apiFilenames: string[] = await globify('../**/*.api.ts');
    const apiRoutesClasses = apiFilenames.map((pathname: string) => (
        require(fromRoot(pathname))
    ));

    apiRoutesClasses.forEach(ApiRoutes => new ApiRoutes());
}
