export default function(values, min = null, max = null) {

        if (typeof values === 'number') {
                values = [values, ] // Convert to array if just given a single value.
        }

        return !values // Returns true if no values are outside the interval.
                .filter(value => ((min != null) && (value < min)) || ((max != null) && (value > max)))
                .length
}
