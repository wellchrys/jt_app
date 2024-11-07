import { Button } from 'ui';
import { MdDelete } from 'react-icons/md';
import classNames from 'classnames';

type Props = {
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
};

export default function RemoveButton({ icon, onClick, disabled }: Props) {
  return (
    <Button
      data-testid="remove-button"
      variant="icon"
      size="none"
      className={classNames('', {
        'text-gray-dark600 hover:text-gray-dark600': disabled,
      })}
      onClick={onClick}
    >
      {!!icon ? icon : <MdDelete className="w-5 h-5" aria-hidden="true" />}
    </Button>
  );
}
