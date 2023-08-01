import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  color: "salmon",
};
export default function Header() {
  return (
    <div>
      <Link href="/" legacyBehavior>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/pets" legacyBehavior>
        <a style={linkStyle}>Pets</a>
      </Link>
    </div>
  );
}
