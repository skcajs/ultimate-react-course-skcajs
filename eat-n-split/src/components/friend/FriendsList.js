import Friend from "./Friend";

export default function FriendsList({
  friends,
  selectedFriend,
  onSelectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          isSelected={selectedFriend?.id === friend.id}
          onSelectedFriend={onSelectedFriend}
        />
      ))}
    </ul>
  );
}
