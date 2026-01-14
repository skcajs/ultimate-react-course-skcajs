import { useState } from "react";
import SplitBillForm from "./components/forms/SplitBillForm";
import AddFriendForm from "./components/forms/AddFriendForm";
import FriendsList from "./components/friend/FriendsList";
import { initialFriends } from "./data/initialFriends";
import Button from "./components/common/Button";

export default function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriendForm() {
    setShowAddFriendForm((isOpen) => !isOpen);
  }

  function handleSelectedFriend(friend) {
    if (selectedFriend?.id === friend.id) setSelectedFriend(null);
    else setSelectedFriend(friend);
  }

  function handleAddFriend(name) {
    const id = crypto.randomUUID();

    setFriends((friends) => [
      ...friends,
      {
        id: crypto.randomUUID(),
        name: name,
        image: `https://i.pravatar.cc/48?u=${id}`,
        balance: 0,
      },
    ]);

    setShowAddFriendForm(false);
  }

  function handleSplitBill(amountOwed) {
    setFriends(
      friends.map((friend) => {
        return friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + amountOwed,
            }
          : friend;
      })
    );
    setSelectedFriend("");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectedFriend={handleSelectedFriend}
        />
        {showAddFriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriendForm}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSelectedFriend={handleSelectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
