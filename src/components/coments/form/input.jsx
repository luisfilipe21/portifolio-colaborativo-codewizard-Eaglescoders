export const InputForm = ({
  inputType, placeholderContent, inputValue , register, onBlurFunction
}) =>{
  return(
    <>
       <input
              type={inputType}
              placeholder={placeholderContent}
              value={inputValue || ""}
              className="w-full bg-inherit h-9 rounded-lg border border-blue-1 
              p-2.5 outline-none text-purple-1 dark:text-white-1 font-inter 
              lg:h-14 lg:px-8 lg:max-w-min"
              {...register}
              onBlur={onBlurFunction}
            />
    </>
  )
}

