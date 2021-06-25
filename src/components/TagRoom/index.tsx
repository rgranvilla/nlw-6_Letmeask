import { FiChevronRight } from "react-icons/fi";

import { Container } from "./styles";

export function TagRoom() {
  return (
    <Container>
      <div className="number-questions">
        <div>
          <span>4</span>
        </div>
      </div>
      <strong>Sala</strong>
      <div className="access-room">
        <FiChevronRight />
      </div>
    </Container>
  );
}
