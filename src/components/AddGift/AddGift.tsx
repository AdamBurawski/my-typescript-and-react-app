import React, { useState } from "react";
import { CreateGiftReq } from "types";

export const AddGift = () => {
  const [form, setForm] = useState<CreateGiftReq>({
    name: "",
    count: 0,
  });

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  return (
    <form>
      <h2>Add gift</h2>
      <label>Name:</label>
      <input
        type="text"
        value={form.name}
        onChange={(e) => updateForm("name", e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
