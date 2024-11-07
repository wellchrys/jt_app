import { Button } from '@/components/ui/button';

type PaginationProps = {
  disableBefore?: boolean;
  disableNext?: boolean;
  onNextClick?: () => void;
  onPreviousClick?: () => void;
};

export default function Pagination({
  disableBefore,
  disableNext,
  onNextClick,
  onPreviousClick,
}: PaginationProps) {
  return (
    <nav
      className="relative flex items-center justify-end flex-1 py-3.5 gap-x-3.5"
      aria-label="Pagination"
    >
      <Button
        variant="secondary"
        disabled={disableBefore}
        onClick={onPreviousClick}
        className="px-2 py-2"
      >
        Anterior
      </Button>
      <Button
        variant="secondary"
        disabled={disableNext}
        onClick={onNextClick}
        className="px-2 py-2"
      >
        Próxima
      </Button>
    </nav>
  );
}
