export function generateOTP(){
   return Math.floor(100000 + Math.random * 900000) .toString()
}
export function getOTP(otp){
    return 
`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>OTP Verification</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,0.08);">

<tr>
<td align="center" style="background:#2563eb;padding:30px;">
<h1 style="margin:0;color:white;">
Interview AI
</h1>
</td>
</tr>

<tr>
<td style="padding:40px;">

<h2 style="margin-top:0;color:#222;">
Verify Your Email
</h2>

<p style="font-size:16px;color:#555;line-height:1.7;">
Hello,
</p>

<p style="font-size:16px;color:#555;line-height:1.7;">
Use the following One-Time Password (OTP) to verify your email address.
This OTP is valid for <strong>10 minutes</strong>.
</p>

<div style="text-align:center;margin:35px 0;">

<div style="
display:inline-block;
padding:18px 35px;
font-size:34px;
font-weight:bold;
letter-spacing:8px;
background:#f3f4f6;
border:2px dashed #2563eb;
border-radius:8px;
color:#2563eb;">
${otp}
</div>

</div>

<p style="font-size:15px;color:#666;">
If you didn't request this OTP, you can safely ignore this email.
</p>

<p style="font-size:15px;color:#666;">
Thank you,<br>
<strong>Interview AI Team</strong>
</p>
</td>
</tr>
<tr>
<td align="center" style="background:#f8f9fa;padding:20px;font-size:13px;color:#888;">
© ${new Date().getFullYear()} Interview AI. All Rights Reserved.
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
 `
}