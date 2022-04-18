/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

test("lets users click on thumbnails to make them the hero image", async () => {
  const images = ["1.jpg", "2.png", "3.webm"];

  const carousel = render(<Carousel images={images} />);

  let hero = await carousel.findByTestId("main-image");
  expect(hero.src).toContain("1.jpg");

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    let thumb = await carousel.findByTestId(`thumbnails-${i}`);
    thumb.click();

    expect(hero.src).toContain(image);
    expect(thumb.classList).toContain("active");
  }
});
