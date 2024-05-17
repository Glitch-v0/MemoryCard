import {Card} from './Card.jsx'

// Sample data
let firstCatLoad = [
    { id: "4q", url: "https://cdn2.thecatapi.com/images/4q.jpg", width: 500, height: 409 },
    { id: "4hg", url: "https://cdn2.thecatapi.com/images/4hg.gif", width: 300, height: 257 },
    { id: "4pv", url: "https://cdn2.thecatapi.com/images/4pv.gif", width: 500, height: 281 },
    { id: "5n6", url: "https://cdn2.thecatapi.com/images/5n6.jpg", width: 900, height: 517 },
    { id: "aqn", url: "https://cdn2.thecatapi.com/images/aqn.jpg", width: 594, height: 900 },
    { id: "b2s", url: "https://cdn2.thecatapi.com/images/b2s.jpg", width: 768, height: 1024 },
    { id: "ben", url: "https://cdn2.thecatapi.com/images/ben.jpg", width: 500, height: 333 },
    { id: "MTYzNDQ0OA", url: "https://cdn2.thecatapi.com/images/MTYzNDQ0OA.jpg", width: 504, height: 670 },
    { id: "TuXvdAni3", url: "https://cdn2.thecatapi.com/images/TuXvdAni3.jpg", width: 1500, height: 895 },
    { id: "O4yjcTJOh", url: "https://cdn2.thecatapi.com/images/O4yjcTJOh.jpg", width: 1080, height: 1350 }
  ];

  console.log(firstCatLoad)
export function CardBoard() {
   return (
    <div id="cardBoard" className='grid grid-cols-5 grid-rows-2 gap-4 p-4 bg-green-400'>
        {firstCatLoad.map(cat => (
        <Card key={cat.id} catItem={cat} />
      ))}
    </div>
   );
}