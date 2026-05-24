import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 className="font-display font-semibold text-5xl md:text-7xl tracking-[-0.02em] text-[var(--color-text)] transition-all duration-500 group-hover:opacity-25">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className={cn(container, "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12")}>
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

interface RevealImageListProps {
  items?: ShowImageListItemProps[];
}

function RevealImageList({ items }: RevealImageListProps) {
  const defaultItems: ShowImageListItemProps[] = [
    {
      text: "Bouquets",
      images: [
        { src: "https://images.unsplash.com/photo-1490750967868-88df5691cc62?w=200&h=200&fit=crop&q=80", alt: "Flower bouquet" },
        { src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&h=200&fit=crop&q=80", alt: "Rose arrangement" },
      ],
    },
    {
      text: "Hampers",
      images: [
        { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=200&h=200&fit=crop&q=80", alt: "Gift hamper" },
        { src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=200&h=200&fit=crop&q=80", alt: "Gift arrangement" },
      ],
    },
    {
      text: "Albums",
      images: [
        { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop&q=80", alt: "Photo album" },
        { src: "https://images.unsplash.com/photo-1487530811015-780f2f2c0806?w=200&h=200&fit=crop&q=80", alt: "Floral frame" },
      ],
    },
  ];

  const list = items ?? defaultItems;

  return (
    <div className="flex flex-col gap-1 rounded-sm bg-[var(--color-cream)] px-8 py-4">
      <h3 className="label-overline mb-4">
        What I create
      </h3>
      {list.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList };
