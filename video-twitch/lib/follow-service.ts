import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getFollowers = async () => {
  const self = await getSelf();
  let users = [];
  users = await db.follow.findMany({
    where: {
      followerId: self.id,
    },
    include: {
      following: true,
    },
  });
  return users;
};

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!otherUser) {
      throw new Error("User not found");
    }
    if (otherUser.id === self.id) {
      return true;
    }
    const isExisting = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });
    console.log("Đã gọi api new");
    return !!isExisting;
  } catch (error) {
    return false;
  }
};
export const followUser = async (id: string) => {
  const self = await getSelf();
  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (existingFollow) {
    throw new Error("Already following");
  }

  try {
    const follow = await db.follow.create({
      data: {
        followerId: self.id,
        followingId: otherUser.id,
      },
      include: {
        follower: true,
        following: true,
      },
    });

    return follow; // Return the created follow relationship with included users
  } catch (error) {
    throw new Error("Failed to create follow relationship");
  }
};
export const unFollowUser = async (id: string) => {
  const self = await getSelf();
  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  if (otherUser.id === self.id) {
    throw new Error("Cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (!existingFollow) {
    throw new Error("Not following");
  }

  try {
    const follow = await db.follow.delete({
      where: {
        id: existingFollow.id,
      },
      include: {
        follower: true,
        following: true,
      },
    });

    return follow; // Return the created follow relationship with included users
  } catch (error) {
    throw new Error("Failed to unfollow relationship");
  }
};
