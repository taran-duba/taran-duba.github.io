import Image from "next/image";
import type { ImageSlot } from "@/content/projects";
import { withBase } from "@/lib/paths";
import { isTodo } from "@/lib/todo";

/**
 * Image with a fixed aspect ratio. If the image has not been supplied yet
 * (src is "TODO"), renders a quiet placeholder block with the caption in mono.
 */
export function Figure({
  image,
  ratio = "16 / 10",
  showCaption = true,
  priority = false,
  sizes = "(min-width: 75rem) 900px, 100vw",
  className = "",
}: {
  image: ImageSlot;
  ratio?: string;
  showCaption?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const missing = isTodo(image.src);
  return (
    <figure className={className}>
      <div
        className="relative overflow-hidden rounded-sm border border-line bg-surface"
        style={{ aspectRatio: ratio }}
      >
        {missing ? (
          <div className="absolute inset-0 flex items-end p-4" role="img" aria-label={`Placeholder: ${image.caption}`}>
            <PlaceholderPattern />
            <span className="label relative text-muted">{image.caption}</span>
          </div>
        ) : (
          <Image
            src={withBase(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes}
            priority={priority}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {showCaption && !missing && (
        <figcaption className="label mt-3 text-muted">{image.caption}</figcaption>
      )}
    </figure>
  );
}

/** A faint hairline grid so empty slots read as intentional, not broken. */
function PlaceholderPattern() {
  return <div className="placeholder-grid absolute inset-0" aria-hidden="true" />;
}
