"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  requiredField?: boolean
}

export const Input = ({
  className,
  requiredField = false,
  ...props
}: InputProps) => {
  const [value, setValue] = useState("")

  const isFilled = value.trim().length > 0

  return (
    <div className="relative w-full">
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          "peer w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm",
          "placeholder:text-muted-foreground",
          " focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      />

      {requiredField && (
        <span
          className={cn(
            "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
            isFilled
              ? "text-green-500"
              : "h-2 w-2 rounded-full bg-red-500 animate-pulse"
          )}
        >
          {isFilled && <Check size={16} strokeWidth={3} />}
        </span>
      )}
    </div>
  )
}
