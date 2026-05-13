import Image from "next/image";

/**
 * Payment marks for “we accept” display. Files live in /public/images/payments/.
 * - Visa, Mastercard, Amex: Wikimedia Commons vectors (trademarks apply; see each
 *   brand’s merchant / acceptance-mark rules).
 * - Interac: official Canadian merchant SVG from Paramount Commerce brand library
 *   (Interac partner) — same source as INTERAC Brand Requirements docs.
 */

const chipClass =
  "flex h-10 min-w-[2.75rem] items-center justify-center rounded-md bg-white px-2.5 py-1 shadow-sm ring-1 ring-leaf-900/12";

export function PaymentMethodsIcons() {
  return (
    <ul
      className="mt-3 flex flex-wrap items-center gap-2"
      aria-label="Accepted payment methods: Visa, Mastercard, American Express, Interac"
    >
      <li className={chipClass} aria-label="Visa">
        <Image
          src="/images/payments/visa.svg"
          alt=""
          width={56}
          height={18}
          className="h-[1.125rem] w-auto max-w-[3.25rem] object-contain object-left"
          aria-hidden
        />
      </li>
      <li className={chipClass} aria-label="Mastercard">
        <Image
          src="/images/payments/mastercard.svg"
          alt=""
          width={44}
          height={28}
          className="h-7 w-auto max-w-[3.5rem] object-contain"
          aria-hidden
        />
      </li>
      <li className={chipClass} aria-label="American Express">
        <Image
          src="/images/payments/amex.svg"
          alt=""
          width={48}
          height={48}
          className="h-7 w-auto max-w-[2.1rem] object-contain"
          aria-hidden
        />
      </li>
      <li className={chipClass} aria-label="Interac">
        <Image
          src="/images/payments/interac.svg"
          alt=""
          width={40}
          height={40}
          className="h-8 w-auto max-w-[2.5rem] object-contain"
          aria-hidden
        />
      </li>
    </ul>
  );
}
