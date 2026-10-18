type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${className}`.trim()} aria-label="Paw Pawrty">
      <span className="brand-word" aria-hidden="true">
        P
        <img
          className="brand-paw-icon"
          src="/images/paw-mark.png"
          alt=""
        />
        w
      </span>
      <span className="brand-word brand-word-second" aria-hidden="true">
        Pawrty
      </span>
    </span>
  );
}
