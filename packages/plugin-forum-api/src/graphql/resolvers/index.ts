import customScalars from '@erxes/api-utils/src/customScalars';
import ForumCategory from './ForumCategory';
import Mutation from './Mutation';
import Query from './Query';
import { IContext } from '..';
import { IResolvers } from '@graphql-tools/utils';
import ForumPost from './ForumPost';
import ForumComment from './ForumComment';
import ClientPortalUser2 from './ClientPortalUser2';

export default async function generateResolvers(
  serviceDiscovery
): Promise<IResolvers<any, IContext>> {
  const resolvers: IResolvers<any, IContext> = {
    ...customScalars,
    Query,
    Mutation,
    ForumCategory,
    ForumPost,
    ForumComment,
    ClientPortalUser: {
      ...ClientPortalUser2
    }
  };

  return resolvers;
}
