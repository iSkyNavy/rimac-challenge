import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import HomePage from "@pages/HomePage";

const mockUsedNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
	...(await vi.importActual("react-router-dom")),
	useNavigate: () => mockUsedNavigate,
}));
describe("HomePage.spec", () => {
	it("should render fine", () => {
		const { container } = render(<HomePage />);
		expect(container).not.toBeUndefined();
	});
});
