
interface Props {
    children: string | JSX.Element
}

export default function Banner(props: Props) {
  return (
    <div className="
    my-20 
    w-full 
    h-52 
    bg-red-500 
    object-cover 
    flex 
    items-center 
    justify-center"
    >
        {props.children}
    </div>
  )
}
