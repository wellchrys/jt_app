import { Button } from 'ui';
import { MdEdit } from 'react-icons/md';
import classNames from 'classnames';

type Props = {
  disabled?: boolean;
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
};

export default function EditButton({ onClick, disabled, ...props }: Props) {
  return (
    <Button
      {...props}
      disabled={disabled}
      data-testid="edit-button"
      variant="icon"
      size="none"
      onClick={onClick}
      className={classNames('', {
        'cursor-not-allowed': disabled,
      })}
    >
      <MdEdit
        className={classNames('w-5 h-5', {
          'text-gray-dark500 opacity-30': disabled,
        })}
        aria-hidden="true"
      />
    </Button>
  );
}
