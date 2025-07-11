import CatDev from "../assets/catDev.png"

type Props = {
  className: string
}

const Cat = ({ className }: Props) => {
  return (
    <div className={className}>
        <img src={CatDev} alt="" />
    </div>
  )
}

export default Cat