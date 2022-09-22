type NotificationType = "new_post" | "post_liked" | "new_message";

type BaseNotification<TType extends NotificationType, TPayload> = {
    id: string;
    createdAt: Date;
    payload: TPayload;
    type: TType;
};

type NewPostNotification = BaseNotification<
    "new_post",
    {
        friendId: string;
    }
>;

type PostLikedNotification = BaseNotification<
    "post_liked",
    {
        numberOfLikes: number;
    }
>;

type NewMessageNotification = BaseNotification<
    "new_message",
    {
        message: "asdasd";
    }
>;

type INotification = NewPostNotification | PostLikedNotification | NewMessageNotification;

const notification: INotification = {} as INotification;

if (notification.type === "post_liked") {
    notification.payload.numberOfLikes;
}
