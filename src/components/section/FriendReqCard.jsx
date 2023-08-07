"use client";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { CreateUpdateFR, getFRStatus } from "@/lib/dbservices";
import { formatDateTime } from "@/helper/timehelper";

function FriendReqCard({
  ChatUserId,
  ChatUserName,
  userId,
  FRStatus,
  refetch,
}) {
  //const [frArray, setFrArray] = useState(FRStatus);
  const [btnloading, setBtnloading] = useState(false);
  const handleFriendReq = async (type) => {
    setBtnloading(true);
    const data = {
      senderId: userId,
      receiverId: ChatUserId,
      type: type,
    };
    //console.log(data);
    try {
      const result = await CreateUpdateFR(data);
      //console.log(result);
      if (result === null) {
        //setFrArray([]);
      } else {
        //setFrArray([result]);
      }
      refetch();
      setBtnloading(false);
      //console.log(result?.result);
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };
  return (
    <div className="flex justify-center">
      {FRStatus?.length == 0 ? (
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Friend Request</CardTitle>
            <CardDescription>
              Send a request to chat with {ChatUserName}.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button
              loading={btnloading}
              loadingtext={"Loading..."}
              onClick={() => handleFriendReq("requested")}
            >
              Request
            </Button>
          </CardFooter>
        </Card>
      ) : FRStatus?.length > 0 &&
        FRStatus[0].type === "requested" &&
        FRStatus[0].senderId === userId &&
        FRStatus[0].receiverId === ChatUserId ? (
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Friend Request</CardTitle>
            <CardDescription>
              You already sent a request to {ChatUserName} at{" "}
              {formatDateTime(FRStatus[0].updatedAt)}. If you wish to cancel.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button
              loading={btnloading}
              loadingtext={"Loading..."}
              onClick={() => handleFriendReq("cancelreq")}
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
      ) : FRStatus?.length > 0 &&
        FRStatus[0].type === "requested" &&
        FRStatus[0].receiverId === userId &&
        FRStatus[0].senderId === ChatUserId ? (
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Friend Request</CardTitle>
            <CardDescription>
              You got a friend request from {ChatUserName} at{" "}
              {formatDateTime(FRStatus[0].updatedAt)}. If you wish to continue.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              loading={btnloading}
              loadingtext={"Loading..."}
              onClick={() => handleFriendReq("rejected")}
            >
              Reject
            </Button>
            <Button
              loading={btnloading}
              loadingtext={"Loading..."}
              onClick={() => handleFriendReq("accepted")}
            >
              Accept
            </Button>
          </CardFooter>
        </Card>
      ) : FRStatus?.length > 0 &&
        FRStatus[0].type === "rejected" &&
        FRStatus[0].senderId === userId &&
        FRStatus[0].receiverId === ChatUserId ? (
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Friend Request Rejected</CardTitle>
            <CardDescription>
              You got a friend request rejected from {ChatUserName} at{" "}
              {formatDateTime(FRStatus[0].updatedAt)}. If you wish to give
              request again.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              loading={btnloading}
              loadingtext={"Loading..."}
              onClick={() => handleFriendReq("cancelreq")}
            >
              Delete Request
            </Button>
            <Button
              loading={btnloading}
              loadingtext={"Loading..."}
              onClick={() => handleFriendReq("requested")}
            >
              Request Again
            </Button>
          </CardFooter>
        </Card>
      ) : FRStatus?.length > 0 &&
        FRStatus[0].type === "rejected" &&
        FRStatus[0].receiverId === userId &&
        FRStatus[0].senderId === ChatUserId ? (
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Friend Request</CardTitle>
            <CardDescription>
              You rejected a friend request to {ChatUserName} at{" "}
              {formatDateTime(FRStatus[0].updatedAt)}. If you wish to accept.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button
              loading={btnloading}
              loadingtext={"Loading..."}
              onClick={() => handleFriendReq("accepted")}
            >
              Accept
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                you are friends now
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendReqCard;
