import BeatLoader from 'react-spinners/BeatLoader';
// import { getAppDetails } from 'src/store/slices/commonSlice';
// import { useSelector } from 'react-redux';
interface PropTypes {
  children?: React.ReactChild | React.ReactChild[];
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  variant?: 'contained' | 'outlined';
  // eslint-disable-next-line no-unused-vars
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'danger' | 'lighter-text';
  disabled?: boolean;
  loaderColor?: string;
  loadingState?: true | false;
}
// To-do's Button state shold come from the component
export default function Button(props: PropTypes) {
  // const appDetails = useSelector(getAppDetails);
  const {
    children,
    type,
    className,
    variant,
    onClick,
    fullWidth,
    color = 'black',
    disabled,
    loaderColor = '#fff',
    loadingState = false,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`border-2 py-1 2xl:px-4 md:px-2 ${className} relative
      disabled:text-grayText disabled:bg-lightGray disabled:border-none disabled:cursor-not-allowed
      ${
        variant === 'outlined'
          ? `text-${color} border-${color} `
          : `text-white bg-${color} border-${color} rounded-md hover:shadow-md`
      }
      ${fullWidth && 'w-full'}
      `}
      disabled={disabled}
    >
      {children}
      {loadingState && (
        <div className='absolute top-1 right-4'>
          <BeatLoader
            color={loaderColor}
            // loading={appDetails.isLoading}
            size={5}
          />
        </div>
      )}
    </button>
  );
}