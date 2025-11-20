import { CiDeliveryTruck, CiGift, CiGlobe } from "react-icons/ci";
import { TfiWallet } from "react-icons/tfi";
import sliderImage from "@/assets/sliderCardImage1.webp"
import sliderImage2 from "@/assets/sliderCardImage2.webp"
import bannerImage1 from "@/assets/slider-1.webp"
import bannerImage2 from "@/assets/slider-2.webp"

export const homePageConsts = {
  header: "Experience premium products",
  headerDesc: "Discover our curated collection of high-quality electronics and accessories. Fast shipping, secure payments, and customer satisfaction guaranteed.",
  shopNow: "Shop now",
  learnMore: "Learn more",
}

export const featuredSectionConsts = {
  header: "Why choose us?",
  card1Header: 'Fast shipping',
  card1Desc: "Get your orders delivered within 2-3 business days across the country.",
  card2Header: "Secure payments",
  card2Desc: "Bank-level security with Stripe. Your payment information is always safe.",
  card3Header: "Quality guaranteed",
  card3Desc: "All products are verified and come with a 30-day satisfaction guarantee.",
}

export const featuredProductsConst = {
  header: "Featured products",
  addToCart: "Add to cart",
  dollar: "$"
}

export const slides = [
  {
    id: 1,
    title: 'Summer Style Sensations',
    description: 'Having plain clothing makes you look ordinary. We can assist you in choosing the right products with ShopHub.',
    buttonText: 'Shop Now',
    image: bannerImage1,
    bgGradient: 'from-blue-100 via-cyan-100 to-blue-200',
  },
  {
    id: 2,
    title: 'Premium Tech Collection',
    description: 'Discover the latest gadgets and accessories designed for modern living. Elevate your lifestyle today.',
    buttonText: 'Explore Now',
    image: bannerImage2,
    bgGradient: 'from-purple-100 via-pink-100 to-purple-200',
  },
  {
    id: 3,
    title: 'Exclusive Offers',
    description: 'Limited time deals on your favorite products. Get up to 40% off on selected items. Hurry before it ends!',
    buttonText: 'Shop Deals',
    image: bannerImage1,
    bgGradient: 'from-orange-100 via-red-100 to-orange-200',
  },
]

export const benefits = [
  {
    id: 1,
    icon: <CiGlobe className="w-10 h-10" />,
    title: "Worldwide Shipping",
    subtitle: "World Wide Free Shipping.",
  },
  {
    id: 2,
    icon: <TfiWallet className="w-10 h-10" />,
    title: "Secured Payment",
    subtitle: "Safe & Secured Payments",
  },
  {
    id: 3,
    icon: <CiDeliveryTruck className="w-10 h-10" />,
    title: "30-Days Free Returns",
    subtitle: "Within 30 Days for an Exchange",
  },
  {
    id: 4,
    icon: <CiGift className="w-10 h-10" />,
    title: "Surprise Gift",
    subtitle: "Free gift cards & vouchers",
  },
];

export const categories = [
  {
    title: "Men's Fashion",
    image: sliderImage,
  },
  {
    title: "New Arrivals",
    image: sliderImage2,
  },
  {
    title: "Top Sales",
    image: sliderImage,
  },
  {
    title: "Women's Fashion",
    image: sliderImage2,
  },
  {
    title: "Kid's Fashion",
    image: sliderImage,
  },
];

export const marqueeItems = [
  { text: "Spring Collections!", outline: false },
  { text: "Limited Offer Sales!", outline: true },
  { text: "Hot Deal Products!", outline: false },
  { text: "Best Selling Items!", outline: true },
];