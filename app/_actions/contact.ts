"use server"

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
    const rawFormData = {
        lastname: formData.get("lastname") as string,
        firstname: formData.get("firstname") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    if (!rawFormData.lastname) {
        return {
            status: "error",
            message: "姓を入力してください",
        };
    }
    if (!rawFormData.company) {
        return {
            status: "error",
            message: "会社名を入力してください",
        };
    }
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }
    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        };
    }
    if (!rawFormData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください",
        };
    }
    const result = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${pocess.env.HUBSPOT_FORM_ID}",
        {
            method: "POST",
        }
    )

    return { status: "success", message: "OK" };
}