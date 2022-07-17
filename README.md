# my-cards-component-lib

## About Project

This is a custom card component library.

Document will be updated.

## Installation
```
npm i @asefa96/my-cards-component-lib
```

## Usage

```js
import {GlassmorphCard,HoveredOpenCard,TransitionCard,HoveredShopCard} from "@asefa96/my-cards-component-lib"

export default function App() {
return (
     // Glassmorph Card
     <GlassmorphCard
       content="Lorem, ipsum dolor sit amet consectetur"
       title="Golden Shoe"
       image="https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2010MAZ007a_640/2010MAZ007a_640_01.png"
     />

     // Hovered Open Card
     <HoveredOpenCard
       image="https://wallup.net/wp-content/uploads/2019/09/27326-shelby-cobra-vehicles-cars-auto-muscle-race-racing-silver-chrome-wheels-hot-rod.jpg"
       title="Someone famous"
       subtitle="team leader"
       content="Lorem ipsum is simple dummy text on the printing and typesetting
     industry."
     />

     // Transition Card
     <TransitionCard
       image="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
       title="Mountain"
       content=" Lorem Ipsum is simply dummy text from the printing and typeseting
           industry"
       buttonText="Read More"
     />

     //Hovered Shop Card
     <HoveredShopCard
       image="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
       title="Mountain"
       content=" Lorem Ipsum is simply dummy text from the printing and typeseting
     industry"
       author="Ray Raynold"
     />

 );

}
```
