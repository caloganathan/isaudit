import type { Metadata } from "next";
import TeaserDeck from "@/components/TeaserDeck";

export const metadata: Metadata = {
  title: "JCSS Indonesia — IS Audit, Cyber & Privacy Assurance (Overview)",
};

export default function TeaserPage() {
  return <TeaserDeck />;
}
