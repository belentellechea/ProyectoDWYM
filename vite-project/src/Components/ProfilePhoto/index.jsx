import { Avatar } from "antd";

export function ProfilePhoto({size, url}) {
    return (
        <>
            <Avatar size={size} src={url} alt="avatar" />
        </>
    )
}