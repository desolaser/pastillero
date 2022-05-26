import { Icon, IconProps } from "@chakra-ui/icons";

export const PlusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 48 48" {...props}>
    <circle cx={24} cy={24} r={24} fill="black" fillOpacity={0.01} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 24C14 18.48 18.48 14 24 14C29.52 14 34 18.48 34 24C34 29.52 29.52 34 24 34C18.48 34 14 29.52 14 24ZM25 25H28C28.55 25 29 24.55 29 24C29 23.45 28.55 23 28 23H25V20C25 19.45 24.55 19 24 19C23.45 19 23 19.45 23 20V23H20C19.45 23 19 23.45 19 24C19 24.55 19.45 25 20 25H23V28C23 28.55 23.45 29 24 29C24.55 29 25 28.55 25 28V25Z"
      fill="#0277BD"
    />
    <mask
      id="mask0_0_19"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={14}
      y={14}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 24C14 18.48 18.48 14 24 14C29.52 14 34 18.48 34 24C34 29.52 29.52 34 24 34C18.48 34 14 29.52 14 24ZM25 25H28C28.55 25 29 24.55 29 24C29 23.45 28.55 23 28 23H25V20C25 19.45 24.55 19 24 19C23.45 19 23 19.45 23 20V23H20C19.45 23 19 23.45 19 24C19 24.55 19.45 25 20 25H23V28C23 28.55 23.45 29 24 29C24.55 29 25 28.55 25 28V25Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_0_19)">
      <rect x={12} y={12} width={101} height={101} fill="#0277BD" />
    </g>
  </Icon>
);

export default PlusIcon;