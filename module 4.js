// Prompt user for inputs
let serviceAmount = parseFloat(
  prompt("Enter the service amount (between $5 - $500):"),
);
let serviceQuality = prompt("Enter service quality (great, ok, poor):");

// Function to verify service quality
function verifyQuality(quality) {
  quality = quality.toLowerCase();

  if (quality === "great" || quality === "ok" || quality === "poor") {
    return true;
  } else {
    alert("Invalid service quality entered. Please reload and try again.");
    return false;
  }
}

// Function to verify service amount
function verifyAmount(amount) {
  if (amount >= 5 && amount <= 500) {
    return true;
  } else {
    alert("Service amount must be between $5 and $500.");
    return false;
  }
}

// Function to calculate tip
function calculateTip(amount, quality) {
  let tipRate;

  if (quality === "great") {
    tipRate = 0.2;
  } else if (quality === "ok") {
    tipRate = 0.15;
  } else if (quality === "poor") {
    tipRate = 0.1;
  }

  return amount * tipRate;
}

// Run the validation and calculation
if (verifyQuality(serviceQuality) && verifyAmount(serviceAmount)) {
  let tip = calculateTip(serviceAmount, serviceQuality);

  alert(
    "For a service amount of $" +
      serviceAmount.toFixed(2) +
      " with " +
      serviceQuality +
      " service, the recommended tip is $" +
      tip.toFixed(2),
  );
}
