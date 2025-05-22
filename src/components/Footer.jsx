import { Mail, Phone, MapPin, Facebook, ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8">
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Thông tin CLB */}
                <div className="space-y-4">
                    <a
                        href="https://www.facebook.com/greenwichitclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-primary transition-colors"
                    >
                        <Facebook size={24} />
                        <h3 className="text-xl font-semibold">Greenwich IT Club</h3>
                    </a>

                    <div className="flex items-start space-x-3">
                        <Mail className="text-primary" size={20} />
                        <a
                            href="mailto:gwitclub@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            gwitclub@gmail.com
                        </a>
                    </div>
                    <div className="flex items-start space-x-3">
                        <Phone className="text-primary" size={20} />
                        <a
                            href="tel:+84396569216"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            +84 396569216
                        </a>
                    </div>
                    <div className="flex items-start space-x-3">
                        <MapPin className="text-primary" size={20} />
                        <span className="text-muted-foreground">
                            Số 2 Phạm Văn Bạch, Yên Hòa, Cầu Giấy, Hà Nội
                        </span>
                    </div>
                </div>

                {/* Bản quyền & nút cuộn lên */}
                <div className="flex flex-col md:items-end justify-between space-y-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Greenwich IT Club. All rights reserved.</p>
                    <a
                        href="#hero"
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors self-start md:self-end"
                    >
                        <ArrowUp size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
