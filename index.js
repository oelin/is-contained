export default function(values, min = 0, max = 10) {

        if (typeof values === 'number') {
                values = [values, ] // Convert to array if just given a single value.
        }

        return !values // Returns true if no values are outside the interval.
                .filter(value => (value < min) || (value > max))
                .length
}
