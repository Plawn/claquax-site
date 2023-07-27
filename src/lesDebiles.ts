

export type Item = {
    name: string;
    photoUrl: string;
}

export type UnDebile = {
    id: number;
    name: string;
    photoUrl: string;
    bio: string;
    items: Item[];
    score: number;
}

export const debiles: UnDebile[] = [
{
    id: 0,
    name: "Camille",
    photoUrl: "https://media.licdn.com/dms/image/D4E03AQFxbZM5gXBk2g/profile-displayphoto-shrink_800_800/0/1682060410912?e=1695859200&v=beta&t=Ez31CxtWEmjKiXTNjg7tvMVASKA3oDtJgq_-zZVW_aE",
    bio: "*Changer de voiture, c'est cool*",
    items: [],
    score: 1,
},
];
