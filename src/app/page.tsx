"use client";
import Guest from "./components/Guest";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { GuestI } from "../../lib/prisma/guest";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<GuestI[] | []>([]);
  async function upload(e: FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    const resp = await axios.post("api/guest", { name }).catch((err) => {});
    if (resp) {
      getGuests();
    }
  }
  async function getGuests() {
    const resp = await axios.get("api/guest").catch((err) => {});
    if (resp) {
      setGuests(resp.data.guests);
    }
  }

  async function deleteGuest(name1: string) {
    const resp = await axios.post("api/guest/delete", { data: { name: name1 } }).catch((err) => {});
    if (resp) {
      getGuests();
    }
  }
  useEffect(() => {
    getGuests();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <form
        onSubmit={(e) => upload(e)}
        className="w-full bg-gray-900 h-[6rem] flex justify-center items-center gap-4 border-gray-300 border-b-[0.25px] "
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 lg:p-4 text-black lg:w-[25rem] lg:text-2xl font-bold focus-visible:outline-none active:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-0 rounded-md"
        />
        <button type="submit">
          <h1 className="text-white font-[900] font-inter text-[1.2rem] uppercase hover:text-violet-400 transition-all cursor-pointer  ">
            Add guest
          </h1>
        </button>
      </form>
      <div className="flex flex-1 flex-col bg-gray-800 w-full items-center p-5 gap-3">
        {guests &&
          guests.map((guest: GuestI) => {
            return <Guest name={guest.name} time={new Date(guest.createdAt!)} onClick={deleteGuest}></Guest>;
          })}
      </div>
    </main>
  );
}
