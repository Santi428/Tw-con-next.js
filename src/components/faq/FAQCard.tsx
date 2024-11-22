import { PropsWithChildren } from "react";

type FAQCardProps = PropsWithChildren & {
  title: string;
  onClick: (id: number) => void
  id: number
}

const FAQCard = ({title, onClick, id, children}: FAQCardProps) => {

  return (
      <div onClick={() => onClick(id)} className="col-span-4 rounded-lg border border-gray-200 cursor-pointer p-4">
        <h3 className="text-lg">
          {title}
        </h3>
        <h5 className="pt-3">{children}</h5>
      </div>
  )
}

export default FAQCard