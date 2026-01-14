import { useState } from "react";
import Button from "../common/Button";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    onAddFriend(name);

    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend's name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>🖼️ Image Url</label>
      <input disabled={true} value="https://i.pravatar.cc/48" type="text" />
      <Button>Add</Button>
    </form>
  );
}
