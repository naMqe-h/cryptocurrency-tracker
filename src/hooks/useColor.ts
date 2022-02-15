export const useColor = () => {

    const getColor = (value: number) => {
        return value >= 0 ? 'text-green-500' : 'text-red-500'
    }

    return { getColor }
}