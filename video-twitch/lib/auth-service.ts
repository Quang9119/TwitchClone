import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
export const getSelf = async () => {
  const self = await currentUser();
  if (!self || !self.username) {
    throw new Error("Unothorized");
  }
  const user = await db.user.findUnique({
    where: {
      externalUserId: self.id,
    },
  });
  if(!user) {
    throw new Error("User not found");
  }
  return user;
};
