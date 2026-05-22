import { useState } from "react";
import { PROJECTS_PER_PAGE } from "./project.constants";

export function useProjectsPagination(total: number) {
  const [displayCount, setDisplayCount] = useState(PROJECTS_PER_PAGE);

  const hasMoreProjects = displayCount < total;

  const handleLoadMore = () => {
    setDisplayCount((prev) =>
      Math.min(prev + PROJECTS_PER_PAGE, total)
    );
  };

  return {
    displayCount,
    hasMoreProjects,
    handleLoadMore,
  };
}