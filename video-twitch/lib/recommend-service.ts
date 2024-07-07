import { db } from "./db";
import { getSelf } from "./auth-service";
import { resolve } from "path";

export const getRecommendations = async () => {
  let userId;
  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }
  let users = [];
  if (userId) {
    users = await db.user.findMany({
      where: {
        AND: [
          { id: { not: userId } },
          {
            followedBy: {
              none: {
                followerId: userId,
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return users;
};
