import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(
			"pk_test_51LTJ4xD3RRRMhv0yX6TgbHRuaTflYMMGbwtVMg4nQJHDY0AANbEtXp9NpsjB9DKUkKMm7SObdyyUvpN6AW0jX71J00q5zaVjNJ"
		);
    }

    return stripePromise;
}

export default getStripe