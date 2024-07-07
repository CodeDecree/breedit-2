"use client"
import { SwipeUsers, getOpositeGenderUsers } from "@/actions/swipe";
import { updateMatches } from "@/actions/update-matches";
import { currentUser } from "@/lib/user-from-server";
import { url } from "inspector";
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";

const swiped = (direction: string, swipedUserId: string) => {
  if (direction === "right") {
    updateMatches(swipedUserId);
  }
};

const outOfFrame = (name: string) => {
  console.log(`${name} left the screen!`);
};

export const SwipeCard = () => {

  const [filteredGenderedUsers,setFilteredGenderedUsers] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SwipeUsers();
        setFilteredGenderedUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard overflow-hidden">
      <div className="swipe-container">
      <div className='cardContainer'>
        {filteredGenderedUsers.map((character: any) =>
          <TinderCard className='swipe' key={character.userId} onSwipe={(dir) => swiped(dir, character.userId)} onCardLeftScreen={() => outOfFrame(character.petName)}>
            <div style={{ backgroundImage: 'url(' + character.image + ')' }} className='card'>
              <h3 className=" text-primary antialiased">{character.petName}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      </div>
    </div>
  );
};
