import CatDev from "../assets/catDev.png"

type Props = {
  className: string
}

const Cat = ({ className }: Props) => {
  return (
    <div className={className}>
      <a href="#">
        <img src={CatDev} alt="" />
      </a>
    </div>
  )
}

export default Cat