<script>
	let resendActive = false;
	$: resendActive;
	function reSendOTP() {
		console.log('resendOtp');
		resendActive = true;
	}

	function sendOTP() {
		resendActive = false;
		setTimeout(reSendOTP, 1000);

		console.log('Send OTP');
	}
</script>

<div class="p-10 ">
	<button on:click={sendOTP} class="btn btn-primary">Send Otp</button>
	<button on:click={sendOTP} class="btn btn-secondary {resendActive ? '' : 'btn-disabled'} "
		>ReSend Otp</button
	>
	<div id="countdown" />
</div>
