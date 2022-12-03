import { test, expect } from "@playwright/experimental-ct-react";
import { Card } from "../components/Card";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount }) => {
  const component = await mount(
    <Card
      href="https://next.js.org/docs"
      title="Documentation &rarr;"
      description="Find in-depth information about Next.js features and API."
    />
  );
  await expect(component).toHaveScreenshot();
});
