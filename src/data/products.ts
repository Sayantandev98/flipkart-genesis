import { Product } from "@/components/ProductCard";
import bookGatsby from "@/assets/book-gatsby.jpg";
import bookJavaScript from "@/assets/book-javascript.jpg";
import bookFantasy from "@/assets/book-fantasy.jpg";
import bookMystery from "@/assets/book-mystery.jpg";

export const products: Product[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299,
    originalPrice: 499,
    rating: 4.5,
    reviews: 1250,
    image: bookGatsby,
    category: "Classic Literature",
    description: "A timeless masterpiece of American literature set in the Jazz Age. Follow Nick Carraway as he observes the tragic story of Jay Gatsby and his obsession with Daisy Buchanan in the glittering world of 1920s New York."
  },
  {
    id: "2", 
    title: "JavaScript: The Complete Guide",
    author: "Maximilian Schwarzmüller",
    price: 899,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 2180,
    image: bookJavaScript,
    category: "Programming",
    description: "Master JavaScript from basics to advanced concepts. This comprehensive guide covers modern JavaScript, ES6+, DOM manipulation, async programming, and real-world projects to build your web development skills."
  },
  {
    id: "3",
    title: "Dragon's Quest: The Fire Kingdom",
    author: "Sarah Mitchell",
    price: 399,
    originalPrice: 599,
    rating: 4.3,
    reviews: 890,
    image: bookFantasy,
    category: "Fantasy Fiction",
    description: "Embark on an epic fantasy adventure through mystical realms. Join young warrior Aria as she discovers her magical powers and fights to save the Fire Kingdom from an ancient evil threatening to destroy everything she holds dear."
  },
  {
    id: "4",
    title: "Midnight Detective",
    author: "Robert Kane",
    price: 349,
    originalPrice: 499,
    rating: 4.4,
    reviews: 1567,
    image: bookMystery,
    category: "Mystery Thriller",
    description: "A gripping noir thriller that will keep you guessing until the last page. Detective Sarah Black investigates a series of mysterious disappearances in the city's underground, uncovering a conspiracy that goes deeper than she imagined."
  },
  {
    id: "5",
    title: "Data Structures & Algorithms",
    author: "Thomas Cormen",
    price: 1299,
    originalPrice: 1799,
    rating: 4.8,
    reviews: 3245,
    image: bookJavaScript,
    category: "Computer Science",
    description: "The definitive guide to algorithmic thinking and problem-solving. Essential for computer science students and software engineers preparing for technical interviews and building efficient, scalable software solutions."
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 399,
    originalPrice: 599,
    rating: 4.6,
    reviews: 5670,
    image: bookFantasy,
    category: "Fantasy Fiction", 
    description: "Join Bilbo Baggins on an unexpected journey through Middle-earth. This beloved tale of adventure, friendship, and courage follows a reluctant hobbit as he helps a group of dwarves reclaim their homeland from the dragon Smaug."
  }
];

export const categories = [
  "All Books",
  "Classic Literature", 
  "Programming",
  "Fantasy Fiction",
  "Mystery Thriller",
  "Computer Science"
];